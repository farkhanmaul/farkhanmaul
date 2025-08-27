const mapRange = (
  inputStart: number,
  inputEnd: number,
  value: number,
  outputStart: number,
  outputEnd: number
): number => {
  const inputRange = inputEnd - inputStart;
  const outputRange = outputEnd - outputStart;
  
  if (inputRange === 0) return outputStart;
  
  return outputStart + (((value - inputStart) * outputRange) / inputRange);
};

export default mapRange;