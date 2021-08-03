import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MainStore } from "@store/store"
import { BagItem } from "@components/molecules"
import { Container } from "@components/atoms"

const HomePage: FC = () => {
  const dispatch = useDispatch()
  const bag = useSelector((state: MainStore) => state.shopping.bag)

  return (
    <>
      <Container>
        {bag.map((prod) => (
          <BagItem data={prod} key={prod.variant_id} />
        ))}
      </Container>
    </>
  )
}

export default HomePage
