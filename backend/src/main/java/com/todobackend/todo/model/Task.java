package com.todobackend.todo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="task")
public class Task {
  
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String content;
	private Boolean isDone;
	
	
	public Task() {}
	public Task(String content) {
		super();
		this.content = content;
		this.isDone=false;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Boolean getIsDone() {
		return isDone;
	}
	public void setIsDone(Boolean isDone) {
		this.isDone = isDone;
	}
	public Long getId() {
		return id;
	}
	
}

