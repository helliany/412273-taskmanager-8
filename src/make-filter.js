export const getFilterElement = (caption, amount, isDisabled = false, isChecked = false) => {
  return `
		<input
			type="radio"
			id="filter__${caption.toLowerCase()}"
			class="filter__input visually-hidden"
			name="filter"
			${isDisabled ? ` disabled` : ``}
			${isChecked ? ` checked` : ``}
		/>
		<label for="filter__${caption.toLowerCase()}" class="filter__label">
			${caption.toUpperCase()}
			<span class="filter__${caption.toLowerCase()}-count">${amount}</span>
		</label>
	`;
};
