import { Component, OnInit } from '@angular/core';

interface Curso {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
  cursos = {
    faculdade1: {
      nome: 'Anhanguera',
      descricao: 'Faço faculdade de Propaganda e Publicidade com foco em Marketing. Aprendo a criar campanhas, estudar o mercado e entender o comportamento do consumidor para conectar marcas e pessoas',
      imagem: 'assets/image/Anhanguera.png'
    },
    ingles: {
      nome: 'Letras Inglês – Licenciatura',
      descricao: 'Faço Letras Inglês - Licenciatura. Aprendo sobre língua, literatura e cultura inglesa, além de técnicas para ensinar e planejar aulas, focando na formação de professores de inglês.',
      imagem: 'assets/image/saojudas.png'
    }
  };

  cursoSelecionado: Curso | null = null;

  ngOnInit() {
    this.cursoSelecionado = this.cursos.faculdade1; // Define o curso inicial exibido
  }

  selecionarCategoria(categoria: 'faculdade1' | 'ingles') {
    this.cursoSelecionado = this.cursos[categoria];
  }
}
