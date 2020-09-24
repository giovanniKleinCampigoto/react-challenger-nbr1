const formatDate = (value: Date): string => {
  const toDate = new Date(value);
  return Intl.DateTimeFormat('pt-BR').format(toDate);
};

export default formatDate;
