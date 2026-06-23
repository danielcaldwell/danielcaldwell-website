// Shared navigation behaviour for non-index pages: the menu button toggle and
// the dark/light mode switch. (index.html wires its own, fuller menu inline.)
(function () {
	const settingsButton = document.getElementById('settingsButton');
	const settingsMenu = document.getElementById('settingsMenu');
	const darkModeToggle = document.getElementById('darkModeToggle');

	if (settingsButton && settingsMenu) {
		settingsButton.addEventListener('click', (event) => {
			event.stopPropagation();
			settingsMenu.classList.toggle('hidden');
		});
		document.addEventListener('click', (event) => {
			if (!settingsButton.contains(event.target) && !settingsMenu.contains(event.target)) {
				settingsMenu.classList.add('hidden');
			}
		});
	}

	if (darkModeToggle) {
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		const savedTheme = localStorage.getItem('theme');
		darkModeToggle.checked = savedTheme ? savedTheme === 'dark' : prefersDark;
		darkModeToggle.addEventListener('change', () => {
			const newTheme = darkModeToggle.checked ? 'dark' : 'light';
			document.documentElement.setAttribute('data-theme', newTheme);
			localStorage.setItem('theme', newTheme);
		});
		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
				darkModeToggle.checked = e.matches;
			}
		});
	}
})();
