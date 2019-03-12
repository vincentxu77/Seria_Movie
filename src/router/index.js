import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MovieDetail from '@/components/movie/MovieDetail'
import MusicDetail from '@/components/music/MusicDetail'
import PhotoDetail from '@/components/photo/PhotoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/photo',
      name: 'Photo',
      component: Photo
    },
    {
      path: '/moviedetail',
      name: 'MovieDetail',
      component: MovieDetail
    },
    {
      path: '/musicdetail',
      name: 'MusicDetail',
      component: MusicDetail
    },
    {
      path: '/photodetail',
      name: 'PhotoDetail',
      component: PhotoDetail
    }
  ]
})
