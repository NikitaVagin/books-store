import { rejects } from "assert";
import { unwatchFile } from "fs";


type _transformBookType = {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImage: string
}

const func= () => {

}

export default class BookstoreService {

    _apiBase =  'https://api.itbook.store/1.0/'
    _proxyCors = 'https://thingproxy.freeboard.io/fetch/'

    async getResourseApi (url:string) {
        const res = await fetch(`${this._proxyCors}${this._apiBase}${url}`);
        if(!res.ok){
            console.error(`Не могу получить информацию из ${url}, возвращает ${res.status}`)
        }
        return await res.json();
    }
    getAllNewBooks = async () => {
        const res = await this.getResourseApi('new');
        return res.books.map(this._transformBook)
    }


    _transformBook = (book:any): _transformBookType =>{
        return {
            id: book.isbn13,
            title: book.title,
            author: book.subtitle,
            price: this.__transformPrice(book.price),
            coverImage: book.image
        }
    }

    __transformPrice = (price:string) => {
        const cost = Number(price.replace(/\$/g,''));
        if(cost === 0) {
            return Math.floor(Math.random() * 100)
        }
        return cost
    }

}
