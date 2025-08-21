import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { musicService } from "../../MOCKS/music/service";
import { useNavigate } from "react-router-dom";
import type { Song } from "../../MOCKS/music/music";

export default function NuevaCancion() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    year: "",
    genre: "",
    duration: "",
    rating: "",
    cover: "",
    description: "",
  });

  const mutation = useMutation<void, Error, Omit<Song, "id">>({
    mutationFn: async (data: Omit<Song, "id">) => {
      await musicService.createSong(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["canciones"] }); // refresca la lista
      navigate("/canciones");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prepared = {
      ...formData,
      year: Number(formData.year),
      duration: Number(formData.duration),
      rating: Number(formData.rating),
      genre: formData.genre.split(",").map((g) => g.trim()),
    };
    mutation.mutate(prepared);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Agregar nueva canción</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          "title",
          "artist",
          "album",
          "year",
          "genre",
          "duration",
          "rating",
          "cover",
          "description",
        ].map((field) => (
          <div key={field}>
            <label className="block font-medium">{field}</label>
            <input
              className="w-full border rounded px-2 py-1"
              value={(formData as any)[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={mutation.isPending}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {mutation.isPending ? "Agregando..." : "Agregar canción"}
        </button>

        {mutation.isSuccess && (
          <p className="text-green-600">¡Canción agregada exitosamente!</p>
        )}

        {mutation.isError && (
          <p className="text-red-600">Error al agregar la canción.</p>
        )}
      </form>
    </div>
  );
}
