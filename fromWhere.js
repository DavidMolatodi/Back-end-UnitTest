export default function fromWhere(theCar) {
  if(theCar.startsWith("CY"))
  { return "Bellville" }
  
  if(theCar.startsWith("CJ"))
  { return "Paarl" }
  
  if(theCar.startsWith("CA"))
  { return "Cape Town" }
  
  if(theCar.startsWith("CC"))
  { return "Some other place!" }
}

