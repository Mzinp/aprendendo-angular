import { Injectable, Service } from '@angular/core';

@Service()
export class EnviaFormulario {
  enviaInformacaoForBackend(info: any) {
    console.log('enviando para o backend');

  }
}
