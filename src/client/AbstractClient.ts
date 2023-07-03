import { AbstractEntity } from "@/models/AbstractEntity";
import axios, { AxiosInstance } from "axios";

export class AbstractClient<T extends AbstractEntity> {

    protected axiosClient: AxiosInstance;
    protected tipoDoObjeto: string;

    constructor(tipo: string) {
        this.tipoDoObjeto = tipo;
        this.axiosClient = axios.create({
            baseURL: `http://localhost:8080/api/`,
            headers: {
                'Content-type': 'application/json'
                // 'Access-Control-Allow-Origin': '*'
            }
        });
    }

    public async getAll(): Promise<Array<T>> {
        try {
            return (await this.axiosClient.get<T[]>(`${this.tipoDoObjeto}/all`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async buscarAtivos(): Promise<Array<T>> {
        try {
            return (await this.axiosClient.get<T[]>(`${this.tipoDoObjeto}/get_by_ativo`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async buscaPorId(id: number): Promise<T> {
        try {
            return (await this.axiosClient.get<T>(`${this.tipoDoObjeto}?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async cadastrar(objeto: T): Promise<void> {
        try {
            return (await this.axiosClient.post(`${this.tipoDoObjeto}`, objeto)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async editar(id: number, objeto: T): Promise<void> {
        try {
            return (await this.axiosClient.put(`${this.tipoDoObjeto}?id=${id}`, objeto)).data
        } catch (error: any) {
            return Promise.reject(error.response)
        }
    }

    public async deletar(id: number): Promise<string> {
        try {
            return (await this.axiosClient.delete<string>(`${this.tipoDoObjeto}?id=${id}`)).data
        } catch (error: any) {
            return Promise.reject(error.reponse)
        }
    }
}