/the Code I used/

int soundSensor = 4;

void setup ()
{

  pinMode (soundSensor, INPUT);
  pinMode (8, OUTPUT);
  pinMode (10, OUTPUT);
  pinMode (12, OUTPUT);
  pinMode (7, OUTPUT);
  pinMode (13, OUTPUT);
}

void loop()
{
  int statusSensor = digitalRead (soundSensor);

  if (statusSensor == 1)
  {
    digitalWrite(8, HIGH);
    digitalWrite(10, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(7, HIGH);
    digitalWrite(13, HIGH);
  }

  else
  {
    digitalWrite(8, HIGH);
    digitalWrite(10, HIGH);
    digitalWrite(12, HIGH);
    digitalWrite(7, HIGH);
    digitalWrite(13, HIGH);
  }
}

