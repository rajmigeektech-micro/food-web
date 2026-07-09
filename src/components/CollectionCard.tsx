import type { Collection } from '../data'

export function CollectionCard({ collection }: { collection: Collection }) {
  return (
    <article className="collection-card">
      <a className="image-link" href="#collections" aria-label={collection.title}>
        <img src={collection.image} alt={collection.title} decoding="async" />
      </a>
      <div className="collection-card__body">
        <h3><a href="#collections">{collection.title}</a></h3>
        <span>{collection.count}</span>
      </div>
    </article>
  )
}
