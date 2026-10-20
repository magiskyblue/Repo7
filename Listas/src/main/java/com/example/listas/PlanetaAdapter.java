package com.example.listas;

import android.content.res.ColorStateList;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.List;

public class PlanetaAdapter extends RecyclerView.Adapter<PlanetaAdapter.PlanetaViewHolder> {

    public interface OnPlanetaClick {
        void onClick(Planeta planeta);
    }

    private final List<Planeta> lista;
    private final OnPlanetaClick listener;

    public PlanetaAdapter(List<Planeta> lista, OnPlanetaClick listener) {
        this.lista = lista;
        this.listener = listener;
    }

    // ===== HOLDER: guarda las vistas de UNA fila =====
    public static class PlanetaViewHolder extends RecyclerView.ViewHolder {
        final View vPlaneta;
        final TextView tvNombre;
        final TextView tvTipo;
        final TextView tvDatos;
        final TextView tvLunas;

        public PlanetaViewHolder(@NonNull View itemView) {
            super(itemView);
            vPlaneta = itemView.findViewById(R.id.vPlaneta);
            tvNombre = itemView.findViewById(R.id.tvNombre);
            tvTipo = itemView.findViewById(R.id.tvTipo);
            tvDatos = itemView.findViewById(R.id.tvDatos);
            tvLunas = itemView.findViewById(R.id.tvLunas);
        }
    }

    // ===== ADAPTER =====

    @NonNull
    @Override
    public PlanetaViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View vista = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.item_planeta, parent, false);
        return new PlanetaViewHolder(vista);
    }

    @Override
    public void onBindViewHolder(@NonNull PlanetaViewHolder holder, int position) {
        Planeta planeta = lista.get(position);

        holder.tvNombre.setText(planeta.getNombre());
        holder.tvTipo.setText(planeta.getTipo());
        holder.tvDatos.setText(planeta.getDistancia() + " del Sol · " + planeta.getDiametro());
        holder.tvLunas.setText(planeta.getLunas());
        holder.vPlaneta.setBackgroundTintList(ColorStateList.valueOf(planeta.getColor()));

        holder.itemView.setOnClickListener(v -> listener.onClick(planeta));

        // Animación de entrada: aparece subiendo y con fade
        holder.itemView.setAlpha(0f);
        holder.itemView.setTranslationY(40f);
        holder.itemView.animate()
                .alpha(1f)
                .translationY(0f)
                .setDuration(350)
                .setStartDelay(Math.min(position, 6) * 60L)
                .start();
    }

    @Override
    public int getItemCount() {
        return lista.size();
    }
}