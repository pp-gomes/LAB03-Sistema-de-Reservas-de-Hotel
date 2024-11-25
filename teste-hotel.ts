import { Hotel, Reserva } from "./hotel";

// Criando o hotel
const hotel = new Hotel();

// Registrando reservas
hotel.registrarReserva(new Reserva(101, "Alice", new Date(2024, 10, 25), new Date(2024, 10, 30)));
hotel.registrarReserva(new Reserva(102, "Bob", new Date(2024, 10, 26), new Date(2024, 10, 28)));

// Consultando status dos quartos
console.log(hotel.consultarStatusQuarto(101)); // "Reservado"
console.log(hotel.consultarStatusQuarto(103)); // "Disponível"

// Cancelando uma reserva
hotel.cancelarReserva(101);
console.log(hotel.consultarStatusQuarto(101)); // "Disponível"
