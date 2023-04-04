import { MaterialModel } from "../../../models/components";
import { MaterialType } from "../../../models/components";

export const newArticle: MaterialModel = {
  author: { 
    name: 'Test Article',
    photoUrl: 'http://www.storage.com/authors/1.png',
    organization: 'Test Organization',
    position: 'Test Position',
  }, 
  type: MaterialType.article,
  title: 'Test Title',
  content: 'Test Content',
  image: 'http://www.storage.com/materials/1.png',
  status: 'published',
  views: 10,
  likes: 10,
  publicationDate: new Date().toISOString(),
  comments: [
    {
      user: 'Test User', 
      message: 'Test Message'
    }
],
  labels: ['Test Label'],
};