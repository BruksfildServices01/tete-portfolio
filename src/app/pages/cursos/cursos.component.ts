import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import cursosData from '../../../assets/data/cursos.json';

interface Curso {
  nomeCurso: string;
  preview: string;
  pdfUrl: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = cursosData;
  modalAberto: boolean = false;
  cursoSelecionado: Curso | null = null;
  pdfSafeUrl: SafeResourceUrl | null = null;
  
  private isDragging = false;
  private startX = 0;
  private scrollLeft = 0;

  constructor(private sanitizer: DomSanitizer, private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const container = this.el.nativeElement.querySelector('.linha-curso');
    this.renderer.listen(container, 'mousedown', this.startDragging.bind(this));
    this.renderer.listen(container, 'mousemove', this.onDragging.bind(this));
    this.renderer.listen(container, 'mouseup', this.stopDragging.bind(this));
    this.renderer.listen(container, 'mouseleave', this.stopDragging.bind(this));

    // Eventos para dispositivos móveis
    this.renderer.listen(container, 'touchstart', this.startDragging.bind(this));
    this.renderer.listen(container, 'touchmove', this.onDragging.bind(this));
    this.renderer.listen(container, 'touchend', this.stopDragging.bind(this));
  }

  abrirModal(curso: Curso) {
    this.cursoSelecionado = curso;
    this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(curso.pdfUrl);

    if (this.isMobileDevice()) {
      window.open(curso.pdfUrl, '_blank');
    } else {
      this.modalAberto = true;
    }
  }

  fecharModal() {
    this.modalAberto = false;
    this.cursoSelecionado = null;
    this.pdfSafeUrl = null;
  }

  isMobileDevice(): boolean {
    return window.innerWidth <= 768;
  }

  // Métodos para o arraste
  startDragging(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    const container = this.el.nativeElement.querySelector('.linha-curso');
    this.startX = event instanceof MouseEvent ? event.pageX - container.offsetLeft : event.touches[0].pageX - container.offsetLeft;
    this.scrollLeft = container.scrollLeft;
    event.preventDefault(); // Previne o comportamento padrão para evitar conflitos
  }

  onDragging(event: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const container = this.el.nativeElement.querySelector('.linha-curso');
    const x = event instanceof MouseEvent ? event.pageX - container.offsetLeft : event.touches[0].pageX - container.offsetLeft;
    const walk = (x - this.startX) * 1.5; // Ajusta a sensibilidade do arraste
    container.scrollLeft = this.scrollLeft - walk;
  }

  stopDragging() {
    this.isDragging = false;
  }
}
