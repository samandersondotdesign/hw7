void setup() {
  // initialize serial communication at 9600 bits per second:
  Serial.begin(9600);
  pinMode(13, OUTPUT);
  pinMode(10, OUTPUT);
}


// the loop routine runs over and over again forever:
void loop() {
  // read the input on analog pin 0:
  int sensorValue = analogRead(A0);
  // print out the value you read:
  Serial.println(sensorValue);

  if (sensorValue > 800) {
    digitalWrite(13, HIGH);
    digitalWrite(10, LOW);
  } else {
    digitalWrite(13, LOW);
    digitalWrite(10, HIGH);
  }

  


}
