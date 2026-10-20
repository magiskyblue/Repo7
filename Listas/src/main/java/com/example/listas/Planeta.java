package com.example.listas;

public class Planeta {
    private final String nombre;
    private final String tipo;
    private final String distancia;
    private final String diametro;
    private final String lunas;
    private final String dato;
    private final int color;

    public Planeta(String nombre, String tipo, String distancia, String diametro,
                   String lunas, String dato, int color) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.distancia = distancia;
        this.diametro = diametro;
        this.lunas = lunas;
        this.dato = dato;
        this.color = color;
    }

    public String getNombre() { return nombre; }
    public String getTipo() { return tipo; }
    public String getDistancia() { return distancia; }
    public String getDiametro() { return diametro; }
    public String getLunas() { return lunas; }
    public String getDato() { return dato; }
    public int getColor() { return color; }
}