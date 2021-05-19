module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          lighten: '#F2F2F2',
          light: '#D5D5D5',
          base: '#C4C4C4',
          dark: '#ABABAB',
          darken: '#454545'
        },
        pink: {
          light: '#F9E8E6',
          base: '#F6D4CF',
          dark: '#F1C5BE'
        }
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif']
      },
      fontSize: {
        sm: ['12px', { letterSpacing: '-0.41px' }],
        md: ['18px', { letterSpacing: '-0.41px' }],
        lg: ['24px', { letterSpacing: '-0.41px' }],
        xl: ['36px', { letterSpacing: '-0.41px' }]
      },
      spacing: {
        xxs: '5px',
        xs: '8px',
        sm: '12px',
        md: '24px',
        lg: '30px',
        xl: '50px'
      },
      borderRadius: {
        xs: '20px',
        sm: '25px',
        md: '41px'
      }
    }
  },
  variants: {},
  plugins: []
}
