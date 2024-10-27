import { Component, OnInit } from '@angular/core';
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

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  abrirModal(curso: Curso) {
    this.cursoSelecionado = curso;
    this.pdfSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(curso.pdfUrl);

    if (this.isMobileDevice()) {
      // Em dispositivos móveis, abre o PDF em uma nova aba
      window.open(curso.pdfUrl, '_blank');
    } else {
      // Em desktops, exibe no modal
      this.modalAberto = true;
    }
  }

  fecharModal() {
    this.modalAberto = false;
    this.cursoSelecionado = null;
    this.pdfSafeUrl = null;
  }

  // Método para detectar dispositivos móveis
  isMobileDevice(): boolean {
    return window.innerWidth <= 768;
  }
}
