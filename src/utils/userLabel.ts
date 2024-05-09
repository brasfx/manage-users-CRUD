export const getCorrectTypeUserLabel = (userType: string) => {
  switch (userType) {
    case 'ADMIN':
      return 'Administrador';
    case 'USER':
      return 'Usuário Padrão';
    default:
      break;
  }
};
