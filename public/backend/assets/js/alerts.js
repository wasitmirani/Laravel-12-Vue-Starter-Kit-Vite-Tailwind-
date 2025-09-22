const a = document.getElementById("liveAlertPlaceholder"),
	s = document.getElementById("liveAlertBtn");

const r = (t, n) => {
	const e = document.createElement("div");
	e.innerHTML = [
		`<div class="alert mb-2 alert-${n} alert-dismissible" role="alert">`,
		`   <div>${t}</div>`,
		'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><i class="bi bi-x"></i></button>',
		"</div>"
	].join('');
	a.append(e);
};

const applyToAll = (selector, callback) => {
	document.querySelectorAll(selector).forEach(callback);
};

s && s.addEventListener("click", () => {
	r("Nice, you triggered this alert message!", "success");
});

// Apply indeterminate state to checkboxes
applyToAll('.bd-example-indeterminate [type="checkbox"]', checkbox => {
	checkbox.indeterminate = true;
});

// Prevent default on specific links
applyToAll('.bd-content [href="javascript:void(0);"]', link => {
	link.addEventListener("click", e => e.preventDefault());
});
