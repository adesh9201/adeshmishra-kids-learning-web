// ignore_for_file: library_private_types_in_public_api, use_key_in_widget_constructors, prefer_const_constructors_in_immutables

import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:just_audio/just_audio.dart';


import '../../models/bird_model.dart';
import '../../utils/const_dimensions.dart';
import '../../utils/constants.dart';
import '../../utils/functions.dart';
import 'birds_test.dart';

class BirdsPage extends StatelessWidget {

  final FlutterTts flutterTts = FlutterTts();
  final AudioPlayer audioPlayer = AudioPlayer();

  BirdsPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          AppConstants.bird,
          style: TextStyle(fontWeight: FontWeight.bold),
        ),
        actions: [
          IconButton(
            icon: const Icon(Icons.assessment),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (context) => const BirdsTestPage()),
              );
            },
          ),
        ],
      ),
      body: Center(
        child: BirdWidget(
          birds: AppConstants.birds,
          flutterTts: flutterTts,
          audioPlayer: audioPlayer,
        ),
      ),
    );
  }
}

class BirdWidget extends StatefulWidget {
  final List<Bird> birds;
  final FlutterTts flutterTts;
  final AudioPlayer audioPlayer;

  BirdWidget({
    required this.birds,
    required this.flutterTts,
    required this.audioPlayer,
  });

  @override
  _BirdWidgetState createState() => _BirdWidgetState();
}

class _BirdWidgetState extends State<BirdWidget> {
  int currentIndex = 0;

  void _navigateToNextBird() {
    setState(() {
      currentIndex = (currentIndex + 1) % widget.birds.length;
    });
  }

  void _navigateToPreviousBird() {
    setState(() {
      currentIndex =
          (currentIndex - 1 + widget.birds.length) % widget.birds.length;
    });
  }

  @override
  Widget build(BuildContext context) {
    Bird bird = widget.birds[currentIndex];
    return SingleChildScrollView(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          GestureDetector(
            onTap: _navigateToNextBird,
            child: Container(
              width: ConstantDimensions.exceptions[1],
              height: ConstantDimensions.exceptions[1],
              decoration: BoxDecoration(
                border: Border.all(color: Colors.black),
                borderRadius: BorderRadius.circular(8.0),
                color: bird.backgroundColor,
              ),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  SizedBox(
                    width:ConstantDimensions.widthExtraLarge * 7,
                    height: ConstantDimensions.heightExtraLarge * 7,
                    child: SvgPicture.asset(bird.svgAsset),
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(height: ConstantDimensions.heightMedium),
          IconButton.outlined(
            highlightColor: Colors.amber,
            onPressed: () {
              AppFunctions().readName(
                bird.name,
              );
            },
            icon: const Icon(Icons.volume_up_outlined),
          ),
          Text(
            bird.name,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 60,
              fontFamily: 'Comic',
            ),
          ),
          const SizedBox(height: ConstantDimensions.heightMedium),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                onPressed: _navigateToPreviousBird,
                icon: const Icon(Icons.arrow_back),
              ),
              const SizedBox(width: ConstantDimensions.widthMedium),
              ElevatedButton(
                onPressed: () {
                  AppFunctions().playSound(bird.soundAsset);
                },
                child: const Text('Play Sound'),
              ),
              const SizedBox(width: ConstantDimensions.widthMedium),
              IconButton(
                onPressed: _navigateToNextBird,
                icon: const Icon(Icons.arrow_forward),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
