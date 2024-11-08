import { Component } from '@angular/core';

interface CursoComplementar {
  nomeCurso: string;
  descricao: string;
  imagemCertificado: string;
  categoria: string;
}

@Component({
  selector: 'app-cursos-complementares',
  templateUrl: './cursos-complementares.component.html',
  styleUrls: ['./cursos-complementares.component.scss']
})
export class CursosComplementaresComponent {
  cursosComplementares: CursoComplementar[] = [
    { nomeCurso: 'Empatia', descricao: 'Desenvolvimento Pessoal.', imagemCertificado: 'assets/certificados/0.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Coragem para perguntar', descricao: 'Desenvolvimento Pessoal.', imagemCertificado: 'assets/certificados/1.jpg', categoria: 'Comunicação' },
    { nomeCurso: 'Controle de emoções', descricao: 'Desenvolvimento Pessoal.', imagemCertificado: 'assets/certificados/3.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Semana do Estágio', descricao: 'Cultura da empresa.', imagemCertificado: 'assets/certificados/4.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Agile Coach', descricao: 'Técnico.', imagemCertificado: 'assets/certificados/5.jpg', categoria: 'Ágil' },
    { nomeCurso: 'Aprender a Reaprender', descricao: 'Desenvolvimento Pessoal', imagemCertificado: 'assets/certificados/6.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Atitude', descricao: 'Desenvolvimento Pessoal.', imagemCertificado: 'assets/certificados/7.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Financeiro', descricao: 'Finanças pessoais.', imagemCertificado: 'assets/certificados/8.jpg', categoria: 'Financeiro' },
    { nomeCurso: 'Empreendedorismo', descricao: 'Finanças pessoais.', imagemCertificado: 'assets/certificados/9.jpg', categoria: 'Financeiro' },
    { nomeCurso: 'Gestão Administrativa', descricao: 'Habilidades práticas em ferramentas.', imagemCertificado: 'assets/certificados/10.jpg', categoria: 'Técnico' },
    { nomeCurso: 'Gestão Administrativa', descricao: 'Habilidades técnicas.', imagemCertificado: 'assets/certificados/11.jpg', categoria: 'Técnico' },
    { nomeCurso: 'Conecta BF', descricao: 'Cultura da empresa.', imagemCertificado: 'assets/certificados/12.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Ideias de Negócios', descricao: 'Finanças pessoais.', imagemCertificado: 'assets/certificados/13.jpg', categoria: 'Financeiro' },
    { nomeCurso: 'Comunicação Assíncrona', descricao: 'Desenvolvimento Pessoal.', imagemCertificado: 'assets/certificados/14.jpg', categoria: 'Comunicação' },
    { nomeCurso: 'Comunicação Executiva', descricao: 'Desenvolvimento Pessoal.', imagemCertificado: 'assets/certificados/15.jpg', categoria: 'Comunicação' },
    { nomeCurso: 'Concorrência Leal - Obrigatório', descricao: 'Treinamento em ética e compliance.', imagemCertificado: 'assets/certificados/16.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Desbloqueio Criativo', descricao: 'Estimular a criatividade e inovação.', imagemCertificado: 'assets/certificados/17.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Gestão de Polaridades', descricao: 'Trilha de aprendizagem em gestão de polaridades.', imagemCertificado: 'assets/certificados/18.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Cultura de Confiança', descricao: 'Trilha de aprendizagem em cultura de confiança.', imagemCertificado: 'assets/certificados/19.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Design de Serviços', descricao: 'Treinamento online em design de serviços.', imagemCertificado: 'assets/certificados/20.jpg', categoria: 'Técnico' },
    { nomeCurso: 'Trilha Design Thinking', descricao: 'Trilha de aprendizagem em Design Thinking.', imagemCertificado: 'assets/certificados/21.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Domínio emocional na comunicação', descricao: 'Trilha de aprendizagem em domínio emocional.', imagemCertificado: 'assets/certificados/22.jpg', categoria: 'Comunicação' },
    { nomeCurso: 'Workshop English Club - Intermediário', descricao: 'Workshop presencial de inglês.', imagemCertificado: 'assets/certificados/23.jpg', categoria: 'Comunicação' },
    { nomeCurso: 'Ética - Obrigatório', descricao: 'Treinamento online sobre ética.', imagemCertificado: 'assets/certificados/24.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Facilitação e Times', descricao: 'Trilha de aprendizagem em facilitação e times.', imagemCertificado: 'assets/certificados/25.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Fundamentos do Design Gráfico', descricao: 'Curso autoinstrucional de fundamentos do design gráfico.', imagemCertificado: 'assets/certificados/26.jpg', categoria: 'Técnico' },
    { nomeCurso: 'Trilha em Gerenciamento de Projetos GBS', descricao: 'Trilha de aprendizagem em gerenciamento de projetos GBS.', imagemCertificado: 'assets/certificados/27.jpg', categoria: 'Corporativo' },
    { nomeCurso: "Gestão de Polaridades", descricao: "Trilha de aprendizagem sobre gestão de polaridades.", imagemCertificado: "assets/certificados/28.jpg", categoria: "Corporativo" },
    { nomeCurso: "Gestão Horizontal", descricao: "Treinamento online sobre gestão horizontal.", imagemCertificado: "assets/certificados/29.jpg", categoria: "Corporativo" },
    { nomeCurso: "Workshop English Club - Básico", descricao: "Treinamento presencial de inglês básico.", imagemCertificado: "assets/certificados/30.jpg", categoria: "Corporativo" },
    { nomeCurso: "Semana do Estagiário - Inovação e Projetos", descricao: "Treinamento presencial focado em inovação e projetos.", imagemCertificado: "assets/certificados/31.jpg", categoria: "Corporativo" },
    { nomeCurso: "Inteligência Coletiva: Como Fomentar a Inovação", descricao: "Treinamento online sobre modelos distribuídos para inovação.", imagemCertificado: "assets/certificados/32.jpg", categoria: "Corporativo" },
    { nomeCurso: "Inteligência Emocional", descricao: "Treinamento online sobre inteligência emocional.", imagemCertificado: "assets/certificados/33.jpg", categoria: "Corporativo" },
    { nomeCurso: "Internet das Coisas", descricao: "Trilha de aprendizagem sobre Internet das Coisas.", imagemCertificado: "assets/certificados/34.jpg", categoria: "Corporativo" },
    { nomeCurso: "Introdução à Gestão de Projetos", descricao: "Curso autoinstrucional sobre gestão de projetos.", imagemCertificado: "assets/certificados/35.jpg", categoria: "Corporativo" },
    { nomeCurso: "Liderança Humanizada", descricao: "Trilha de aprendizagem sobre liderança humanizada.", imagemCertificado: "assets/certificados/36.jpg", categoria: "Corporativo" },
    { nomeCurso: "Fundamentos da Boa Liderança", descricao: "Treinamento online sobre fundamentos da liderança.", imagemCertificado: "assets/certificados/37.jpg", categoria: "Corporativo" },
    { nomeCurso: 'Multi Gerações', descricao: 'Trilha de aprendizagem Multi Gerações.', imagemCertificado: 'assets/certificados/48.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Multiplicadores de conhecimento', descricao: 'Trilha de aprendizagem Multiplicadores de conhecimento.', imagemCertificado: 'assets/certificados/49.jpg', categoria: 'Pessoal' },
    { nomeCurso: 'Neurociência do Consumo', descricao: 'Trilha de aprendizagem Neurociência do Consumo.', imagemCertificado: 'assets/certificados/50.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'O poder da mobilização', descricao: 'Como criar engajamento coletivo para alcançar grandes feitos.', imagemCertificado: 'assets/certificados/51.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'OKR na prática', descricao: 'Trilha de aprendizagem OKR na prática.', imagemCertificado: 'assets/certificados/52.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Pitch - Qual você precisa e como montar o seu?', descricao: 'Treinamento online sobre Pitch.', imagemCertificado: 'assets/certificados/53.jpg', categoria: 'Comunicação' },
    { nomeCurso: 'Planejamento Estratégico', descricao: 'Trilha de aprendizagem Planejamento Estratégico.', imagemCertificado: 'assets/certificados/54.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'PLDFT - Prevenção à lavagem de dinheiro e ao financiamento do terrorismo', descricao: 'Treinamento online sobre PLDFT.', imagemCertificado: 'assets/certificados/55.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Product Owner', descricao: 'Trilha de aprendizagem Product Owner.', imagemCertificado: 'assets/certificados/56.jpg', categoria: 'Corporativo' },
    { nomeCurso: 'Protagonismo', descricao: 'Trilha de aprendizagem Protagonismo.', imagemCertificado: 'assets/certificados/57.jpg', categoria: 'Pessoal' }


  ];


    // Adicione mais cursos conforme necessário
  

  cursosFiltrados: CursoComplementar[] = [];
  categorias: string[] = [];
  paginaAtual = 1;
  cursosPorPagina = 8;

  isModalOpen = false;
  selectedCurso: CursoComplementar | null = null;

  constructor() {
    this.categorias = Array.from(new Set(this.cursosComplementares.map(c => c.categoria)));
    this.filtrarCursos('Todos');
  }

  filtrarCursos(categoria: string) {
    this.paginaAtual = 1;
    this.cursosFiltrados = categoria === 'Todos' ? this.cursosComplementares : this.cursosComplementares.filter(c => c.categoria === categoria);
  }

  getCursosPaginaAtual(): CursoComplementar[] {
    const inicio = (this.paginaAtual - 1) * this.cursosPorPagina;
    return this.cursosFiltrados.slice(inicio, inicio + this.cursosPorPagina);
  }

  proximaPagina() {
    if ((this.paginaAtual * this.cursosPorPagina) < this.cursosFiltrados.length) {
      this.paginaAtual++;
    }
  }

  paginaAnterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
    }
  }

  openModal(curso: CursoComplementar) {
    this.selectedCurso = curso;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedCurso = null;
  }
}
