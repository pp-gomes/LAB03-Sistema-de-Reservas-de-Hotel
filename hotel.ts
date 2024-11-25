// Classe que representa uma Reserva de quarto
export class Reserva {
    constructor(
        public numeroQuarto: number, // Número do quarto reservado
        public nomeHospede: string, // Nome do hóspede que fez a reserva
        public dataEntrada: Date,   // Data de entrada do hóspede
        public dataSaida: Date      // Data de saída do hóspede
    ) {}
}

// Classe que gerencia as reservas de um hotel
export class Hotel {
    private reservas: Reserva[] = []; // Lista de reservas ativas

    // Método para registrar uma nova reserva
    public registrarReserva(reserva: Reserva): void {
        this.reservas.push(reserva);
    }

    // Método para cancelar uma reserva com base no número do quarto
    public cancelarReserva(numeroQuarto: number): void {
        this.reservas = this.reservas.filter(r => r.numeroQuarto !== numeroQuarto);
    }

    // Método para consultar o status de um quarto (Reservado ou Disponível)
    public consultarStatusQuarto(numeroQuarto: number): string {
        return this.reservas.some(r => r.numeroQuarto === numeroQuarto) ? "Reservado" : "Disponível";
    }
}
