int LED1 = 8;

void setup() {
  pinMode(LED1,OUTPUT);

    
}

void loop() {
  digitalWrite(LED1,HIGH);
  
  delay(1000);
 
  digitalWrite(LED1,LOW);
  
  delay(1000);
 
}
