class Negociacao {
    //precisa ser definido as propriedades da class
    //    private _data: Date;
    //    private _quantidade: number;
    //    private _valor: number;
    //esses parametros que estão escritos no construtor serão atributos privados da propria class negociacao (é um atalho)
    constructor(_data, _quantidade, _valor) {
        //regra da negociação
        this._data = _data;
        this._quantidade = _quantidade;
        this._valor = _valor;
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    }
    //metodos
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
