<script lang="ts">
	type Props = {
		type?: 'button' | 'submit' | 'reset';
		variant?: 'primary' | 'secondary' | 'danger';
		size?: 'sm' | 'md' | 'lg';
		disabled?: boolean;
		onclick?: (e?: MouseEvent) => void;
		label: string;
	};

	let props: Props = $props();

	let classes = $derived.by(() => {
		let class_string = `inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`;

		if (props.size === 'sm') {
			class_string = class_string.replace('px-4 py-2', 'px-3 py-1').replace('text-base', 'text-sm');
		} else if (props.size === 'lg') {
			class_string = class_string.replace('px-4 py-2', 'px-6 py-3').replace('text-base', 'text-lg');
		}

		if (props.variant === 'primary') {
			class_string = class_string
				.replace('bg-indigo-600', 'bg-indigo-600')
				.replace('hover:bg-indigo-700', 'hover:bg-indigo-700')
				.replace('focus:ring-indigo-500', 'focus:ring-indigo-500');
		} else if (props.variant === 'secondary') {
			class_string = class_string
				.replace('bg-indigo-600', 'bg-gray-600')
				.replace('hover:bg-indigo-700', 'hover:bg-gray-700')
				.replace('focus:ring-indigo-500', 'focus:ring-gray-500');
		} else if (props.variant === 'danger') {
			class_string = class_string
				.replace('bg-indigo-600', 'bg-red-600')
				.replace('hover:bg-indigo-700', 'hover:bg-red-700')
				.replace('focus:ring-indigo-500', 'focus:ring-red-500');
		}

		if (props.disabled) {
			class_string = class_string
				.replace('bg-indigo-600', 'bg-gray-300')
				.replace('hover:bg-indigo-700', 'hover:bg-gray-300')
				.replace('focus:ring-indigo-500', 'focus:ring-gray-300');
		}

		return class_string;
	});
</script>

<button class={classes} {...props}>
	{props.label}
</button>
