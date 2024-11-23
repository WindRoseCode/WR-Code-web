// Inicializa tooltips do Bootstrap
const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

function openModal(title, description) {
  document.getElementById('serviceModalLabel').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  new bootstrap.Modal(document.getElementById('serviceModal')).show();
}
