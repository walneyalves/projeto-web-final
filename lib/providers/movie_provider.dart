import 'package:flutter/material.dart';
import '../models/movie.dart';
import '../services/tmdb_service.dart';

class MovieProvider with ChangeNotifier {
  final TMDBService _service = TMDBService();
  List<Movie> _movies = [];

  List<Movie> get movies => _movies;

  Future<void> loadNowPlaying() async {
    _movies = await _service.fetchNowPlaying();
    notifyListeners();
  }
}
