public class Inimigo {
    private int ataque;
    private int defesa;
    private int pontos;

    public Inimigo() {}

    public Inimigo(int ataque, int defesa, int pontos) {
        this.ataque = ataque;
        this.defesa = defesa;
        this.pontos = pontos;
    }


    public int getAtaque() {
        return ataque;
    }

    public void setAtaque(int ataque) {
        this.ataque = ataque;
    }

    public int getDefesa() {
        return defesa;
    }

    public void setDefesa(int defesa) {
        this.defesa = defesa;
    }

    public int getPontos() {
        return pontos;
    }

    public void setPontos(int pontos) {
        this.pontos = pontos;
    }
}
