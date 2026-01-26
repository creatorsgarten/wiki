<style>
.people-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  padding: 1rem 0;
}

@media (min-width: 768px) {
  .people-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
}

.person-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #f9fafb;
  transition: transform 0.2s, box-shadow 0.2s;
  text-decoration: none;
  color: inherit;
}

.person-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.person-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}

.person-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.person-nickname {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
}

.person-intro {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.4;
}
</style>