import { ThemeOptions } from '@mui/material'

export const baseTheme: ThemeOptions = {
	mixins: {
		toolbar: {}, // This will get rid of minHeight styles
	},
	typography: {
		fontFamily: 'Inter, sans-serif',
		h1: {
			fontSize: '3rem', // 48px
		},
		h2: {
			fontSize: '2rem', //32px
		},
		h3: {
			fontSize: '1.5rem', // 24px
		},
		h4: {
			fontSize: '1.25rem', // 20px
		},
		h5: {
			fontSize: '1rem', // 16px
		},
		button: {
			fontSize: '1rem',
			textTransform: 'none',
			fontWeight: 600,
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				variant: 'contained',
			},
		},
		MuiTextField: {
			defaultProps: {
				autoComplete: 'off',
				fullWidth: true,
			},
		},
		MuiAppBar: {
			defaultProps: {
				position: 'static',
			},
		},
		MuiToolbar: {
			defaultProps: {
				disableGutters: true,
			},
		},
	},
}
