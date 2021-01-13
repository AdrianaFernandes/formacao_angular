class Negociacao {

    //precisa ser definido as propriedades da class

   private _data;
   private _quantidade;
   private _valor;

    constructor(data, quantidade, valor){

        //regra da negociação

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;

    }

    //metodos

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }

}