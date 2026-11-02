import { booleanAttribute, Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  imports: [],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {

  private enviaFormularioService = inject(EnviaFormulario)

  name: string = 'Mateus';
  mostraTitulo: boolean = false;

  listItems = [
    { id: 1, name: 'mateus', email: 'mateus@email.com' },
    { id: 2, name: 'fernando', email: 'fernando@email.com' },
    { id: 3, name: 'queiroz', email: 'queiroz@email.com' },
  ];

  @Input("name") test!:string;

  @Output() emitindoValorName = new EventEmitter<string>();

  submit(value:any) {
    this.enviaFormularioService.enviaInformacaoForBackend("envinado");
    this.emitindoValorName.emit(this.name);
    console.log(value);
  }
}
