import {expect, it, vi} from "vitest";
import {partida} from "./modelo";
import { dameCarta,obtenerPuntosCarta ,dameEstadoPartida, numeroAleatorio, sumarPuntos } from "./motor";
import * as ui from "./ui";

describe("darEstadoPartida", () => {
    
    it ("dameEstadoPartida, da  un 7.5 ha de devolver 'ganar' ",()=> {
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(7.5);
        //Act
        const resultado = dameEstadoPartida(); 
        //assert
        expect(resultado).toBe("ganar");
        })

    it ("dameEstadoPartida, dado un 9 ha de devolver 'perder' ",()=> {
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(9);
        //Act
        const resultado = dameEstadoPartida();
        //Assert
        expect(resultado).toBe("perder")
    })

    it ("dameEstadoPartida, dado un 4.5 ha de devolver 'cangelo' ",()=> {
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(4.5);
        //Act
        const resultado = dameEstadoPartida();
        //Assert
        expect(resultado).toBe("cangelo")
    })

    it ("dameEstadoPartida, dado un 6.5 ha de devolver 'seguir_jugando' ",()=> {
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(6.5);
        //Act
        const resultado = dameEstadoPartida();
        //Assert
        expect(resultado).toBe("seguir_jugando")
    })

    it ("dameEstadoPartida, dado un 3 ha de devolver 'conservador' ",() => {
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(3);
        //Act
        const resultado = dameEstadoPartida();
        //Assert
        expect(resultado).toBe("conservador")
    })
});

describe("comprobacionGeneracionCartas", () => {
    
    it ("numeroAleatorio, dado un 0.3 deberia de devolver 3.", () => {
        vi.spyOn(Math, "random").mockReturnValue(0.3);
        //Act
        const resultado = numeroAleatorio();
        //Assert
        expect(resultado).toBe(3);
    })

    it ("dameCarta, dado un numero superior a 7, devuelve el mismo + 2, deberia de devolver 10",() => {
        const numeroAleatorio = 8;
        //Act
        const resultado = dameCarta(numeroAleatorio);
        //Assert
        expect(resultado).toBe(10);
    })

    it ("dameCarta, dado un numero inferior a 1, devuelve 1, deberia de devolver 1",() => {
        const numeroAleatorio = 0.25;
        //Act
        const resultado = dameCarta(numeroAleatorio);
        //Assert
        expect(resultado).toBe(1);
    })

    it ("dameCarta, deberia de devolver 5",() => {
        const numeroAleatorio = 5;
        //Act
        const resultado = dameCarta(numeroAleatorio);
        //Assert
        expect(resultado).toBe(5);
    })

    it("obtenerPuntosCarta, si es mayor que 7 deberia devolver 0.5", () => {
        const carta = 9;
        //Act
        const resultado = obtenerPuntosCarta(carta);
        //Assert
        expect(resultado).toBe(0.5);
    })

    it("obtenerPuntosCarta, como es menor que 7 ha de devolver a si mismo",() => {
        const carta = 5;
        //Act
        const resultado = obtenerPuntosCarta(carta);
        //Assert
        expect(resultado).toBe(5);
    })

    it("sumarPuntos, ha de añadir a 'puntosTotales' el numero metido", () => { 
        const puntos = 3;
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(4);
        //Act
        const resultado = sumarPuntos(puntos);
        //Assert
        expect(resultado).toBe(7);
    })

    
})

describe("comprobacionURLCartas", () => {
    it("dameURLCarta, dado un numero que no tenga un case asignado, ", () => {
        const carta = 23;
        //Act
        const resultado = dameURLCarta(carta)
        //Assert
        expect(console).toBeCalledWith("Numero irregular.");
    })
})