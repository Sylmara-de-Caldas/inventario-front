export interface Produtos{
    id? : number;
    item : string;
    fornecedor: string;
    categoria: string;
    disponivel: boolean;
    status: string;
    dataInclusao: string;
    dataAlteracao: string;
    quantidade? : number;
}
