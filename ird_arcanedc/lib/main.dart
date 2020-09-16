import 'package:flutter/material.dart';

void main() {
  runApp(
    ArcaneHome(),
  );
}

class ArcaneHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("Arcane Data Collector"),
          backgroundColor: Colors.blue,
        ),
        body: Container(
          color: Colors.white,
        ),
      ),
    );
  }
}
