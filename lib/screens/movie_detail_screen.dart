import 'package:flutter/material.dart';
import '../models/movie.dart';

class MovieDetailScreen extends StatelessWidget {
  final Movie movie;

  const MovieDetailScreen({super.key, required this.movie});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text(movie.title)),
      body: SingleChildScrollView(
        child: Column(
          children: [
            Image.network('https://image.tmdb.org/t/p/w500${movie.posterPath}'),
            const SizedBox(height: 8),
            Padding(
              padding: const EdgeInsets.all(12.0),
              child: Text(movie.overview, style: const TextStyle(fontSize: 16)),
            ),
            const SizedBox(height: 8),
            Text('Nota: ${movie.voteAverage}', style: const TextStyle(fontSize: 18)),
          ],
        ),
      ),
    );
  }
}
