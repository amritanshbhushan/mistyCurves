import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  blogId: number;
  blogPost: any;

  blogPosts = [
    {
      id: 1,
      title: 'Top 10 Hidden Gems in India',
      content: 'Here is the full article content about hidden gems...',
      image: 'assets/images/blog1.jpg'
    },
    {
      id: 2,
      title: 'Adventure Escapes for 2025',
      content: 'Full details on the best adventure destinations...',
      image: 'assets/images/blog2.jpg'
    },
    {
      id: 3,
      title: 'Romantic Getaways in the Hills',
      content: 'Everything you need to know about romantic hill spots...',
      image: 'assets/images/blog3.jpg'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.blogId = Number(this.route.snapshot.paramMap.get('id'));
    this.blogPost = this.blogPosts.find(post => post.id === this.blogId);
  }
}
