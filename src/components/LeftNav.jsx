import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { setSelectedCategory } from "../redux/features/apiSlice"
import LeftNavMenuItem from './LeftNavMenuItem'
import { categories } from '../utils/constants'

const LeftNav = () => {
  const selectCategories = useSelector(state => state.api.selectCategories);

  console.log(selectCategories)

  const dispatch = useDispatch()

  const navigate = useNavigate();


  const clickHandler = (name, type) => {
    switch (type) {
      case 'category':
        return dispatch(setSelectedCategory(name))
      case 'home':
        return dispatch(setSelectedCategory(name))
      case 'menu':
        return false
      default:
        break;
    }
  }

  return (
    <>
      <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-black absolute md:relative z-10 translate-x-[240] md:translate-x-0 transition-all">
        <div className="flex px-5 flex-col">
          {
            categories.map((item, idx) => {
              return (
                <div key={item.name}>
                  <LeftNavMenuItem
                    text={item.type === 'home' ? 'Home' : item.name}
                    icon={item.icon}
                    action={() => {
                      clickHandler(item.name, item.type)
                      navigate('/')
                    }}
                    className={`${selectCategories === item.name ? 'bg-white/[0.15]' : ''}`}
                  />
                  {
                    item.divider && (
                      <hr className="my-5 border-white/[0.2]" />
                    )
                  }
                </div>
              )
            })
          }
          <hr className="my-5 border-white/[0.2]" />
          <div className="text-white/[0.5] text-[12px]">
            Clone by Hanif
          </div>
        </div>
      </div>
    </>
  )
}

export default LeftNav
