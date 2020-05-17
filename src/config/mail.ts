interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'emailqvctem@dominio.com.br',
      name: 'Nome q vc quiser',
    },
  },
} as IMailConfig;
