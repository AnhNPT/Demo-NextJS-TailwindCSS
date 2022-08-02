/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display'],
      'lato': ['Lato']
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1440px'
    },
    colors: {
      primary: {
        1: '#0A2944'

      },
      secondary: {
        1: '#6C7D8C',
        2: '#5168B5;'
      },
      neutral: {
        1: '#151C34',
        2: '#595B62;',
        3: '#8c8e96',
        4: '#afb1bc',
        5: '#F0F0F0',
        6: '#fff',
      },
      accent: {
        1: '#F3F5FC',
        2: '#F2994A',
        3: '#2F80ED'
      }
    },
    lineHeight: {
      '52px': '52px',
      '60px': '60px',
      '32px': '32px',
      '80px': '80px',
      '100px': '100px',
      '28px': '28px',
      '20px': '20px',
      '24px': '24px'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '15px'
      },
    },
    fontSize: {
      '16px': '16px',
      '36px': '36px',
      '18px': '18px',
      '24px': '24px',
      '80px': '80px',
      '14px': '14px',
      '40px': '40px',
      '20px': '20px',
      '60px': '60px',
      '24px': '24px',
      '40px': '40px',
    },
    extend: {
      padding: {
        '20px': '20px',
        '100px': '100px',
        '124px': '124px',
        '60px': '60px',
        '8px': '8px',
        '32px': '32px',
        '40px': '40px',
        'unset': 'unset',
        '560px': '560px',
        '40px': '40px',
        '82px': '82px',
        '113px': '113px',
      },
      margin: {
        'unset': 'unset',
        '60px': '60px',
        '16px': '16px',
        '20px': '20px',
        '100px': '100px',
        '24px': '24px',
        '160px': '160px',
        '32px': '32px',
        '93px': '93px',
        '40px': '40px',
        '14px': '14px',
        '8px': '8px',
        '120px': '120px',
        '38px': '38px',
        '12px': '12px',
        '26px': '26px',
        '560px': '560px',
        '70px': '70px',
        '80px': '80px',
        '170px': '170px',
        '30px': '30px',
      },
      width: {
        '50p': '50%',
        '30p': '30%',
        '40p': '40%',
        '20p': '20%',
        '10p': '10%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '35p': '35%',
        '65p': '65%',
        '45p': '45%',
        '55p': '55%',
        '36p': '36%',
        '25p': '25%',
        '68p': '68%',
        '140px': '140px',
        '24px': '24px',
        '31p': '31%',
      },
      height: {
        '500px': '500px',
      },
      letterSpacing: {
        '2p': '0.02em'
      },
      borderColor: {
        '2': ''
      },
      boxShadow: {
        'custom': '-4px 8px 32px rgba(21, 28, 52, 0.12)'
      },
    },
  },
  plugins: [],
}
