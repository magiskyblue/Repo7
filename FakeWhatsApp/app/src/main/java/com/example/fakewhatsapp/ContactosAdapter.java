package com.example.fakewhatsapp;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.bumptech.glide.Glide;

import java.util.List;

public class ContactosAdapter extends RecyclerView.Adapter<ContactosAdapter.ViewHolder> {

    private List<Perfil> listaPerfiles;

    public ContactosAdapter(List<Perfil> listaPerfiles) {
        this.listaPerfiles = listaPerfiles;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        // Inflamos el diseño de item_contacto.xml
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_contacto, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        Perfil perfil = listaPerfiles.get(position);

        // Si el usuario aún no configura su nombre, mostramos un texto por defecto
        String nombre = perfil.getNombreUsuario() != null ? perfil.getNombreUsuario() : "Usuario nuevo";
        holder.tvNombre.setText(nombre);

        // Si tiene una URL de foto, Glide la descarga y la coloca en el ImageView
        if (perfil.getFotoUrl() != null && !perfil.getFotoUrl().isEmpty()) {
            Glide.with(holder.itemView.getContext())
                    .load(perfil.getFotoUrl())
                    .circleCrop() // Hace que la imagen se vea circular
                    .into(holder.ivAvatar);
        }
    }

    @Override
    public int getItemCount() {
        return listaPerfiles != null ? listaPerfiles.size() : 0;
    }

    // Clase interna para vincular los elementos visuales del item_contacto.xml
    public static class ViewHolder extends RecyclerView.ViewHolder {
        ImageView ivAvatar;
        TextView tvNombre;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            ivAvatar = itemView.findViewById(R.id.ivAvatar);
            tvNombre = itemView.findViewById(R.id.tvNombreContacto);
        }
    }
}