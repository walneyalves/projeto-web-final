import 'package:flutter/material.dart';
import 'package:movie_app/models/movie.dart';
import 'package:cached_network_image/cached_network_image.dart';

class MovieCard extends StatelessWidget {
  final Movie movie;
  final VoidCallback onTap;

  const MovieCard({super.key, required this.movie, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: CachedNetworkImage(
        imageUrl: 'https://image.tmdb.org/t/p/w200${movie.posterPath}',
        width: 50,
        placeholder: (context, url) => const CircularProgressIndicator(),
        errorWidget: (context, url, error) => const Icon(Icons.error),
      ),
      title: Text(movie.title),
      subtitle: Text('Nota: ${movie.voteAverage.toStringAsFixed(1)}'),
      onTap: onTap,
    );
  }
}
