import 'package:flutter/material.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';
import 'package:movie_app/screens/home_screen.dart';
import 'package:movie_app/providers/movie_provider.dart';
import 'package:provider/provider.dart';

void main() async {
  await dotenv.load(fileName: ".env");
  runApp(const MovieApp());
}

class MovieApp extends StatelessWidget {
  const MovieApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ChangeNotifierProvider(
      create: (_) => MovieProvider()..loadNowPlaying(),
      child: MaterialApp(
        debugShowCheckedModeBanner: false,
        title: 'MovieApp',
        theme: ThemeData.dark(),
        home: const HomeScreen(),
      ),
    );
  }
}
