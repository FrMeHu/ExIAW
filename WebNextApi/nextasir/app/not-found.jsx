"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Error() {
    const router = useRouter();
    const goToHome = () => {
        router.push('/');
      };

    return (
        <>
        <div>
            <h1>Pagina de ERROR 404 EXAMEN </h1>
        </div>
        <div>
        <img className="imagen" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/640px-Pokebola-pokeball-png-0.png"></img>
        </div>

        <div>
            <h2>Something went wrong!</h2>
            <a href="/"><button> Pagina principal</button></a>
        </div>
        </>
    );
}