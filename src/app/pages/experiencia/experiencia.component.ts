import { Component, OnInit } from '@angular/core';
import experienciasData from '../../../assets/data/experiencias.json'; // Certifique-se do caminho correto

interface Experiencia {
  nomeCargo: string;
  descricaoFuncao: string;
  nomeEmpresa: string;
  logoEmpresa: string;
}

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'] // Corrigido para styleUrls e em formato de array
})
export class ExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = experienciasData;
  cargoSelecionado: Experiencia = this.experiencias[0];

  constructor() {}

  ngOnInit(): void {}

  selecionarCargo(cargo: Experiencia) {
    this.cargoSelecionado = cargo;
  }
}
