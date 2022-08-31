import mainStore from "@store/store"
import { FC, ReactNode } from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"

export const store = mainStore
export const TestWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Router>
      <Provider store={store}>{children}</Provider>
    </Router>
  )
}

export const testProductBagItem = {
  name: "Green Overhead Jacket",
  price: 145,
  image:
    "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
  id: 8745,
  variant_id: "7845",
  size: "XL",
  qty: 5,
  total: 145
}
export const testProductCard = {
  name: "Green Overhead Jacket",
  price: 145,
  image:
    "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
  id: 8745
}
export const testFavoriteItem = {
  name: "Green Overhead Jacket",
  price: 145,
  id: 8745,
  images: {
    0: {
      image_270x270:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
      image_400x400:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
      image_780x780:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg"
    },
    1: {
      image_270x270:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
      image_400x400:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
      image_780x780:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg"
    },
    2: {
      image_270x270:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
      image_400x400:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg",
      image_780x780:
        "https://www.prettygreen.com/media/__sized__/products/2021-C9GMU11000275-Green-1-thumbnail-270x270-70.jpg"
    }
  }
}
