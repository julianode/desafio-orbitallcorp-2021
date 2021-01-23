package com.orbitallcorp.hack21.cards.controllers;

import com.orbitallcorp.hack21.cards.domains.Card;
import com.orbitallcorp.hack21.cards.services.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cards")
public class CardController {

    @Autowired
    CardService cardService;

    //findAll()
    @GetMapping
    public List<Card> findAllCards(){
        return cardService.findAll();
    }

    //save()
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public String createCard(@RequestBody Card card){
        cardService.save(card);
        String message = "Your user was successfully created.";
        return message;
    }

    //update or PUT -id-
    @PutMapping("/{id}")
    public Card updateCard (@PathVariable Long id, @RequestBody Card card) {
        return cardService.putCard(id, card);
    }

    //delete -id-
    @DeleteMapping("/{id}")
    public void deleteCard(@PathVariable Long id){
        cardService.deleteById(id);
    }

    //findById() -id-
    @GetMapping("/{id}")
    public Card findCard(@PathVariable Long id){
        return cardService.findById(id);
    }

    //pagination and sorting - TODO
    //@GetMapping
}
