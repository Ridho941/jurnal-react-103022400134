import { useState } from "react"
import LabelHarga from "./labelHarga"

function kartuMenu({nama, harga, kategori="Makanan"}) {
    const [jumlah, setJumlah] = useState(0);
    const [catatan, setCatatan] = useState('');
    const tambah = () => setJumlah (jumlah + 1);

    return(
        <>
        <div>
            <h1>{nama}</h1>
            <LabelHarga harga={harga} />
            <p>Kategori :{kategori}</p>
            <div className="kontrol">
                <button onClick={jumlah}>
                    +
                </button>
            </div>
        </div>
        </>
    )
}

export default kartuMenu